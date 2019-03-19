class Api::DishesController < ApplicationController
  before_action :set_menu
  before_action :set_dish, only: [:update, :destroy]

  def index
    render json: @menu.dishes
  end

  def create
    dish = @menu.dish.new(dish_params)
    if @dish.save
      render json: [@menu, @dish]
    else
      render json: {errors: menu.errors }, status: : unprocessable_entity
    end
  end

  def update
    render json: [@menu, @dish] 
  end

  def destroy
    @dish.destroy 
    render json: { message: 'dish Deleted' }
  end

  private
  def set_menu
    @menu = Menu.find(params[:menu_id])
  end

  def dish_params
    params.require(:dish).permit(:title)
  end

  def set_dish
    @dish = dish.find(params[:id])
  end
end
  
end
