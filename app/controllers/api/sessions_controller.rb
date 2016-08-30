class Api::SessionsController < ApplicationController
  def create
    un, pw = params[:user][:email], params[:user][:password]
    @user = User.find_by_credentials(un, pw)

    if @user
      sign_in(@user)
      render 'api/users/show'
    else
      render(
        json: ["Invalid username/password combination"],
        status: 401
      )
    end
  end

  def destroy
    @user = current_user
    if @user
      sign_out
			render json: {}
    else
      render(
        json: ["Nobody signed in"],
        status: 404
      )
    end
  end
end
