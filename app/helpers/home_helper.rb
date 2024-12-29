require 'open-uri'

module HomeHelper
  class BundleNotFound < StandardError; end

  WEBPACK_DEV_SERVER = "http://localhost:4200"
  VITE_DEV_SERVER = "http://localhost:4200"

  def app_script_tag(entry, **options)
    return javascript_include_tag entry unless Rails.env.development?

    path = asset_bundle_path("#{entry}.js")

    options = {
      src: path,
      defer: true
    }.merge(options)

    options.delete(:defer) if options[:async]

    javascript_include_tag '', **options
  end

  private

  def asset_bundle_path(entry, **options)
    valid_entry?(entry)

    asset_path(WEBPACK_DEV_SERVER + "/" + manifest.fetch(entry), **options)
  end

  def manifest
    return @manifest if @manifest
    @manifest ||= JSON.parse(OpenURI.open_uri("#{WEBPACK_DEV_SERVER}/manifest.json").read)
  end

  def valid_entry?(entry)
    return true if manifest.key?(entry)
    raise BundleNotFound, "Could not find bundle with name #{entry}"
  end
end
