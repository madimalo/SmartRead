var SR = SR || {};

SR.AdminInviteUsersView = Backbone.View.extend({

    initialize:function () {
        this.render();
    },

    render:function () {
        var invites = this.model.models;
        $(this.el).html(this.template({
            action: this.model.toJSON()
        }));
        return this;
    },

    events: {
        "click .invite": "inviteUser"
    },

    inviteUser: function(evt){
        var email = $(evt.target).data('email');

        var request = $.ajax({
            url: "email-invite",
            type: "POST",
            data: {email: email}
        });

        request.done(function(data) {
            $(evt.target).parent().prev().text("true");
            SR.utils.showNotification({message: "email has been sent out!"});

        });
        request.fail(function(jqXHR, textStatus) {
            SR.utils.showNotification({message: "failed to sent out the invitation email!"});
        });
    }
});