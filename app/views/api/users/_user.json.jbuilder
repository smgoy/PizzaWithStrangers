attendances = user.events.map do |event|
  event.id
end

hosted_events = user.hosted_events.map do |hosted_event|
  hosted_event.id
end


json.extract! user, :id, :f_name, :city_id, :host
json.attendances attendances
json.hosted_events hosted_events
