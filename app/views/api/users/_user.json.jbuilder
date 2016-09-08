attendances = user.events.map do |event|
  event.id
end


json.extract! user, :id, :f_name, :city_id, :host
json.attendances attendances
json.hosted_events user.hosted_events
