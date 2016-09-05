attendances = user.events.map do |event|
  event.id
end


json.extract! user, :id, :f_name, :city_id
json.attendances attendances
