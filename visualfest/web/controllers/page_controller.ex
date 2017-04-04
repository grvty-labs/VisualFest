defmodule Visualfest.PageController do
  use Visualfest.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def alt(conn, _params) do
    render conn, "alt.html"
  end
end
