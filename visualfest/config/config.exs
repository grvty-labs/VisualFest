# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :visualfest,
  ecto_repos: [Visualfest.Repo]

# Configures the endpoint
config :visualfest, Visualfest.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "dtRM39tocJrVtnVSAdGN22eDXcptF9EQU6YK8typ9Yfn25AmNj9njbIkzciT/TyT",
  render_errors: [view: Visualfest.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Visualfest.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
