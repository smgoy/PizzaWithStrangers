@attendees.each do |attendee|
  json.set! atendee.id.to_s do
    json.f_name atendee.f_name
    json.l_name atendee.l_name
    json.profile_image atendee.profile_image
  end
end
