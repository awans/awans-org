module Jekyll
  class RenderTimeTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      "<a href=\"/public/img/original/#{@text}\" class=\"gallery\">
        <img src=\"/public/img/medium/#{@text}\"/>
      </a>"
    end
  end
end

Liquid::Template.register_tag('salt_image', Jekyll::RenderTimeTag)
