@events.each do |event|
  json.set! event.id.to_s do
    json.id event.id
    json.host_id event.host_id
    json.date event.date.strftime("%a, %B %d")
    json.address event.address
    json.time event.time.strftime("%I:%M %p")
    json.image event.image
    json.seats event.seats
    json.name event.name
  end
end
