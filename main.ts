#! /usr/bin/env node

import inquirer from "inquirer"
import { type } from "os"
import { lookupService } from "dns"

let randomnumber = Math.floor(10000+Math.random()*90000)
let name1 = await inquirer.prompt(
    [
        {
            name: "stdName",
            type:"input",
            message : "Enter student name ",
            validate : function (value:any){
               if(value.trim() !== " "){
                   return true
               }   
               return "please enter a non empty value"   
            }
        },
        {
            name : "courses",
            type : "list",
            message: "select the courses to enrolled ",
            choices : ["TypeScript","Javascript","Python","HTML","CSS"]
        }
    ]
)

let tuitionfee:{[keys:string]:number} ={
   "TypeScript" : 10000,
   "Javascript" : 7000,
   "Python" : 9000,
   "HTML": 3000,
   "CSS" : 6000 
}

console.log(`\nTuition fees: ${tuitionfee[name1.courses]}`)

let mybalance = 0;
console.log(`\nBalance : ${mybalance}`)

let payment = await inquirer.prompt(
    [
        {
            name : "method",
            type : "list",
            message : "select your payment method ",
            choices : ["Bank Transfer","Easy Paisa","Jazz Cash"]
        },
        {
            name : "amountt",
            type : "input",
            message : "Transfer Money ",
            validate : function (value:any){
                if(value.trim() !== " "){
                    return true
                }   
                return "please enter a non empty value" 
        }
    ]
)
console.log(`\nyou select payment method ${payment.method}\n`)

if(payment.amountt == tuitionfee[name1.courses]){
    console.log("conguratulations you successfully enrolled in " + name1.courses )

    let bnm123 = await inquirer.prompt(
        [
            {
                name:"do",
                type : "list",
                message:"what would you like to do next? ",
                choices : ["Veiw Status","Exit"]
            }
        ]
    )
    if(bnm123.do == "Veiw Status"){
        console.log(`Student Name ${name1.stdName}`)
        console.log(`Student ID ${randomnumber}`)
        console.log(`Course ${name1.courses}`)
        console.log(`Tuition fees paid ${tuitionfee[name1.courses]}`)
        console.log(`Balance ${mybalance += tuitionfee[name1.courses]}`)
      } else{
          console.log("exit")
      }
} 
// if(bnm123.do == "Veiw Status"){
//   console.log(`Student Name ${name1.stdName}`)
//   console.log(`Student ID ${randomnumber}`)
//   console.log(`Course ${name1.courses}`)
//   console.log(`Tuition fees paid ${tuitionfee}`)
//   console.log(`Balance ${mybalance += tuitionfee[name1.courses]}`)
// }
else{
    console.log("invalid amount")
}

