function validate(field) {
    
}

function getValidPassports () {    
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

console.log(getValidPassports())


