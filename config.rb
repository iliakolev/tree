# Require any additional compass plugins here.
# -----------------------------------------------------------------------------


# Set this to the root of your project when deployed:
# -----------------------------------------------------------------------------

http_path       = "www/"
css_dir         = "www/assets/css"
sass_dir        = "www/assets/sass"
images_dir      = "www/assets/img"
javascripts_dir = "www/assets/js"
fonts_dir       = "www/assets/fonts"
cache_path      = "/tmp/.sass-cache"
# svg_dir       = "assets/svg"
# docs_dir      = "assets/docs"
# plugins_dir   = "assets/plugins"



# Output style and comments
# -----------------------------------------------------------------------------

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
# Over-ride with force compile to change output style with: compass compile --output-style compressed --force
output_style = :compressed


# Remove SASS/Compass relative comments.
line_comments = false



# SASS core
# -----------------------------------------------------------------------------

# Chrome needs a precision of 7 to round properly
Sass::Script::Number.precision = 7



# Stuff we don't really need below
# -----------------------------------------------------------------------------

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true
