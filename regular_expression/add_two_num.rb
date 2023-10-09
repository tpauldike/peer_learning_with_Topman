#!/usr/bin/env ruby
# A script that adds two integers and prints the sum
n1=ARGV[0].to_i
n2=ARGV[1].to_i
sum = n1 + n2

if ARGV.length != 2
  puts "Usage: ./add_two_num.rg <first_no> <second_no>"
else
  puts "#{n1} + #{n2} = #{sum}"
end
