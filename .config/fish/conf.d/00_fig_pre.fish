contains $HOME/.local/bin $PATH; or set -a PATH $HOME/.local/bin
command -qv q; and eval (q init fish pre --rcfile 00_fig_pre | string split0)
