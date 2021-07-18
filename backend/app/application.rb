class Application
    def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/test/)
        return [200, { "Content-Type" => "application/json" }, [{ :message => "test response!" }.to_json]]
    elsif

    elsif

    elsif
    else
        resp.write "Path Not Found"
    end

    resp.finish
    end
end

# hash = JSON.parse(req.body.read) => {"name" => "NAME", "user_id" => 1}
# CLASSNAME.create(hash)