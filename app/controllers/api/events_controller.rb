class Api::EventsController < ApplicationController
  def index
    @events = Event.where(city_id: params[:city_id])
  end

  def create
    @event = Event.new(event_params)
    @event.host_id = current_user.id

    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find_by_id(params[:id])

    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find_by_id(params[:id])

    @event.delete
    render json: @event
  end

  def user_events
    @attendances = current_user.events
    @hosted_events = current_user.hosted_events
    render 'api/events/user_events'
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
