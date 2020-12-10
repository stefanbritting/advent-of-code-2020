
function getValidPassports () {    //task1
    const input = require("./input")
    let req_fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"] 

    let batches = input.split(/[\W][^#0-9: \w]/g)

    batches.forEach(function (val, key) {
        batches[key] = val.replace(/\n/g, " ")
        
    })

    let counter         = 0
    let valid_passports = 0


    batches.forEach(function (val, key){
        req_fields.forEach((substring, index) => {
            if (val.includes(substring)) {
                counter++;
            }
        })
        if (counter == req_fields.length) {
            valid_passports ++;
        }
        counter = 0
    })
    return valid_passports
}

function validate(obj, key) {
    switch(key) {
        case "byr":
            return obj[key].length === 4 && obj[key] > 1919 && obj[key] < 2003
        case "iyr":
            return obj[key].length === 4 && obj[key] >=2010 && obj[key] <= 2020
        case "eyr":
            return obj[key].length === 4 && obj[key] >= 2020 && obj[key] <= 2030
        case "hgt":
            val = obj[key]
            if(val.match(/\dcm/g))   return val.match(/\d/g).join("") >= 150 && val.match(/\d/g).join("") <= 193
            if(val.match(/\din/g))      return  val.match(/\d/g).join("") >= 59 && val.match(/\d/g).join("") <= 76
        case "hcl":
            return obj[key].match(/#[a-f0-9]{6}/g)
        case "ecl":
            clr_whitelist = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
            return clr_whitelist.includes(obj[key])
        case "pid":
            return obj[key].length === 9 && obj[key].match(/[0-9]{9}/g)
    }

}

function getPassportsWithValidations () {    //task2
    const input = require("./input")
    let req_fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"] 

    let batches = input.split(/\n{2,}/g)

    batches.forEach(function (val, key) {
        batches[key] = val.replace(/\n/g, " ")
        
    })

    let counter         = 0
    let valid_passports = 0


    batches.forEach(function (val, key){
        temp_val = val.split(/\s+/g).map(s => s.split(':'))
        temp_object = Object.fromEntries(temp_val)
        for (key in temp_object) {
            if (validate(temp_object, key)) counter++;
        }
        if (counter == req_fields.length) valid_passports++
        counter = 0
    })
    return valid_passports
}



//console.log(getValidPassports()) // task1
console.log(getPassportsWithValidations()) // task2

