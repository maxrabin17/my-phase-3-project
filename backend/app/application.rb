require 'pry'

class Application
    def call(env)
        resp = Rack::Response.new
        req = Rack::Request.new(env)
        if req.path.match(/test/)
            return [200, { "Content-Type" => "application/json" }, [{ :message => "test response!" }.to_json]]
    
        elsif req.delete?
            # binding.pry
        
            id = req.path.split("/contacts/").last
            Contact.find(id).delete
            return [200, { "Content-Type" => "application/json" }, [{ :message => "Contact Deleted!" }.to_json]]

        elsif req.path.match(/users/) && req.post?
            data = JSON.parse(req.body.read)
                userExists = User.find_by(username: data["username"])
                # binding.pry
                if userExists
                    return [200, { "Content-Type" => "application/json" }, [{ :error => "User with username: #{userExists.username} already exists" }.to_json]]
                else    
                    user = User.create(data)
                    return [200, { "Content-Type" => "application/json" }, [{ :data => {:message => "Successfully Signed Up", :user => user}}.to_json]]
                end
            
            elsif req.path.match(/users/)
                username = req.params["q"]
                user = User.find_by(:username => username)
                # binding.pry
                return [200, { "Content-Type" => "application/json" }, [{:user => user, :userContacts => user.contacts}.to_json]]
                
            elsif req.path.match(/contacts/) && req.post?
                # username = req.params["q"]
                # currentUser = User.find_by(:username => username)
                data = JSON.parse(req.body.read)
                contactExists = Contact.find_by(name: data["name"])
                binding.pry
                if contactExists
                    return [200, { "Content-Type" => "application/json" }, [{ :error => "Contact with name: #{contactExists.name} already exists" }.to_json]]
                else    
                    contact = Contact.create(data)
                    # contact.update(user_id: currentUser.id)
                    return [200, { "Content-Type" => "application/json" }, [{:message => "Successfully Signed Up", :contact => contact}.to_json]]
                end

            else
                resp.write "Path Not Found"
            end
            resp.finish

        end
    end
    
    
    # hash = JSON.parse(req.body.read) => {"name" => "NAME", "user_id" => 1}
    # CLASSNAME.create(hash)
    
    #         
    # USER AUTHENTICATION COME BACK TO
    #  elsif req.path.match(/contacts/)
    #      return [200, { "Content-Type" => "application/json" }, [{ :message => "User does not exist"}]]
    #    resp.write "User Does Not Exist"
    #   end
        # return [200, { "Content-Type" => "application/json" }, [ {data: User.create}.to_json ]]
    # elsif req.path.match(/contacts/)
    #     return [200, { "Content-Type" => "application/json" }, [ {data: Contact.all}.to_json ]]
    
    # elsif req.path.match(/users/)  
    #     return [200, { "Content-Type" => "application/json" }, [ {data: User.all, data2: Contact.all}.to_json ]]

    #USER SIGNUP STORY
        # code to unpackage the stringified JSON
        # Create and save a new user
        # check if a user exists with that username
        # what do I want to send back in response
    
    # USER LOGIN STORY
        #