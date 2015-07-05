module Jekyll
  class RenderTimeTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      "<a href=\"/public/img/original/#{@text.strip}\" class=\"salt-image\">
        <img src=\"/public/img/medium/#{@text.strip}\" alt=\"photo\"/>
      </a>"
    end
  end
end

Liquid::Template.register_tag('salt_image', Jekyll::RenderTimeTag)
