require 'pry'

class Application
    def call(env)
        resp = Rack::Response.new
        req = Rack::Request.new(env)
            if req.path.match(/test/)
                return [200, { "Content-Type" => "application/json" }, [{ :message => "test response!" }.to_json]]
            elsif req.path.match(/users/) && req.post?
                data = JSON.parse(req.body.read)
                # binding.pry
                userExists = User.find_by(username: data["username"])
                if userExists
                    return [200, { "Content-Type" => "application/json" }, [{ :error => "User with username: #{userExists.username} already exists" }.to_json]]
                else    
                    user = User.create(data)
                    return [200, { "Content-Type" => "application/json" }, [{ :data => {:message => "Successfully Signed Up", :user => user}}.to_json]]
                end
                # return [200, { "Content-Type" => "application/json" }, [ {data: User.create}.to_json ]]
            # elsif req.path.match(/contacts/)
            #     return [200, { "Content-Type" => "application/json" }, [ {data: Contact.all}.to_json ]]
            else
                resp.write "Path Not Found"
            end
            resp.finish
        end
    end
    

    # hash = JSON.parse(req.body.read) => {"name" => "NAME", "user_id" => 1}
    # CLASSNAME.create(hash)
    
    
    # elsif req.path.match(/users/)  
    #     return [200, { "Content-Type" => "application/json" }, [ {data: User.all, data2: Contact.all}.to_json ]]

    #USER SIGNUP STORY
        # code to unpackage the stringified JSON
        # Create and save a new user
        # check if a user exists with that username
        # what do I want to send back in response
    
    # USER LOGIN STORY
        #