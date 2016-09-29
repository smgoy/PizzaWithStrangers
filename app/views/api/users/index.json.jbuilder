@attendees.each do |attendee|
  json.set! attendee.id.to_s do
    json.f_name attendee.f_name
    json.l_name attendee.l_name
    json.profile_image attendee.pofile_image
  end
end
