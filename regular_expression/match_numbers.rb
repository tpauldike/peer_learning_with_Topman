#!/usr/bin/env ruby
# A script that matches all digits in a string and joins them together
puts ARGV[0].scan(/\d/).join()
