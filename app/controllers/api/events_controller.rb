class Api::EventsController < ApplicationController
  def index
    @events = Event.where(city_id: params[:city_id])
  end

  def create
    @event = Event.new(event_params)
    @event.host_id = current_user.id
    @events = Event.where(city_id: @event.city_id)

    if @event.save
      render :index
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  private

  def event_params
    params.require(:event).permit(:city_id,
                                  :time,
                                  :address,
                                  :seats,
                                  :name)
  end
end
