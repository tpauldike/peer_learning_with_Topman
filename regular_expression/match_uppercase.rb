#!/usr/bin/env ruby
# A script that matches all uppercases in a string and joins them together
puts ARGV[0].scan(/[A-Z]/).join()
