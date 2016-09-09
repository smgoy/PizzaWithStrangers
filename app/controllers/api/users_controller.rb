class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.host = false

    if @user.save
      sign_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by_id(params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:password,
                                 :email,
                                 :f_name,
                                 :l_name,
                                 :city_id,
                                 :description,
                                 :profile_image,
                                 :host)
  end
end
