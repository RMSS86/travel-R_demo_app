import '../../CAT/Media/MediaCAT.dart';

class UserType
{
    String? id_;
    String? role_;
    bool? active_;
    String? name_;
    String? email_;
    String? passwordChangedAt_;
    String? token_;
    String? imgDir_;
    String? photo_;

    UserType({
        this.id_,
        this.role_,
        this.active_,
        this.name_,
        this.email_,
        this.passwordChangedAt_,
        this.token_,
        this.imgDir_,
        this.photo_ = MediaCAT.userIcon
    });

    UserType.fromJson(Map<String, dynamic> json)
    {
        id_ = json['id'];
        role_ = json['role'];
        active_ = json['active'];
        name_ = json['name'];
        email_ = json['email'];
        passwordChangedAt_ = json['passwordChangedAt'];
        token_ = json['token'];
        imgDir_ = json['imgDir'];

    }
    factory UserType.fromJsons(Map<String, dynamic> json)
    {
        return switch (json)
        {
        {'id': String id_,
        'role': String role_,
        'active': bool active_,
        'name': String name_,
        'email': String email_,
        'passwordChangedAt': String passwordChangedAt_,
        'token': String token_,
        'imgDir': String imgDir_
        } => UserType(
            id_: id_,
            role_: role_,
            active_: active_,
            name_: name_,
            email_: email_,
            passwordChangedAt_: passwordChangedAt_,
            token_: token_,
            imgDir_: imgDir_
        ),
        _ => throw const FormatException('Failed to load User.')
        };
    }
}

class NewUser
{
     String name_;
     String email_;
     String password_;
     String passwordConfirm_;

    NewUser({
        required this.name_,
        required this.email_,
        required this.password_,
        required this.passwordConfirm_
    });
}

class LogIn
{

    final String email_;
    final String password_;

    LogIn({

        required this.email_,
        required this.password_

    });
}

//
// type PasswordReset = {
// password: string;
// passwordConfirm: string;
// passwordResetToken: string;
// passwordResetExpires: string;
// };
// type PasswordUpdate = {
// passwordCurrent: string;
// password: string;
// passwordConfirm: string;
// };
// type Login = {
// email: string;
// password: string;
// };
// type UpdateUser = {
// name: string;
// email: string;
// photo: File | undefined;
// };
// type Email = {
// email: string;
// };
