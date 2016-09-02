class Api::EventsController < ApplicationController
  def index
    @events = Event.where(city_id: params[:city_id])
  end
end
