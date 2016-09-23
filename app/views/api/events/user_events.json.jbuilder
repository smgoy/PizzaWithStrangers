json.attendances do
  @attendances.each do |event|
    json.set! event.id.to_s do
      json.id event.id
      json.host_id event.host_id
      json.address event.address
      json.time event.time.strftime('%l:%M %P')
      json.date event.time.strftime('%B, %e %Y')
      json.seats event.seats
      json.name event.name
    end
  end
end

json.hosted_events do
  @hosted_events.each do |event|
    json.set! event.id.to_s do
      json.id event.id
      json.host_id event.host_id
      json.address event.address
      json.time event.time.strftime('%l:%M %P')
      json.date event.time.strftime('%B, %e %Y')
      json.seats event.seats
      json.name event.name
    end
  end
end
