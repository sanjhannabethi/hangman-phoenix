defmodule HangmanWeb.GameController do
  use HangmanWeb, :controller

  def index(conn, _params) do
    render(conn, :index)
  end
end
