class Api::AttendancesController < ApplicationController
  def create
    @attendance = Attendance.new(attendance_params)

    if @attendance.save
      event = @attendance.event
      event.update(seats: event.seats - 1)
      render json: @attendance
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def destroy
    @attendance = Attendance.where(event_id: params[:event_id], user_id: params[:user_id]).take
    event = @attendance.event
    event.update(seats: event.seats + 1)
    @attendance.destroy
    render json: @attendance
  end

  def event_attendances
    event = Event.find_by_id(params[:id])
    @attendees = event.attendees
    render 'api/users/index'
  end

  private

  def attendance_params
    params.require(:attendance).permit(:user_id, :event_id)
  end

end
