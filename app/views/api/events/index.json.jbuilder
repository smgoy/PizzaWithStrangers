@events.each do |event|
  json.set! event.id.to_s do
    json.id event.id
    json.host_id event.host_id
    json.date event.date
    json.address event.address
    json.time event.time
    json.image event.image
    json.seats event.seats
    json.name event.name
  end
end
