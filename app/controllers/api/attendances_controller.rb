class Api::AttendancesController < ApplicationController
  def create
    @attendance = Attendance.new(attendance_params)

    if @attendance.save
      render json: @attendance
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def destroy
    @attendance = Attendance.where(event_id: params[:event_id], user_id: params[:user_id]).take

    @attendance.destroy
    render json: @attendance
  end

  private

  def attendance_params
    params.require(:attendance).permit(:user_id, :event_id)
  end

end
