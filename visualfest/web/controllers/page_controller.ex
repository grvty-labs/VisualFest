defmodule Visualfest.PageController do
  use Visualfest.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def alt(conn, _params) do
    render( conn, "alt.html",
            title: "VisualFest!",
            description: "Made with love by GRVTY!",
            image_card: "/images/share.jpg")
  end
end
