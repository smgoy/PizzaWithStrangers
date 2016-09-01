@cities.each do |city|
  json.extract! city, :name, :image
end
