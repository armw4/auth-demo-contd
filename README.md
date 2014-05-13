### Key Components

* `identity middleware` - loads the current user’s identity from remote source.

```
middleware/security/identity.js`
```

* `authorization middleware` - authorizes request. hands off whitelist and current user’s
roles to `authorizer`.

```
middleware/security/authorization.js
```

* `authorizer` - contains core authorization logic. compares whiltelist against user’s roles
and determines if there are any in common. so long as there’s at least 1, then the current
user is accepted.

```
lib/security/authorizer.js
```

### Post git clone

```sh
$ cd <app-root>
$ npm install
$ bower install
```

### Starting the app

```sh
$ cd bin
$ ./www
```

The app will boot @ `localhost:3000`

### Testing

#### /

should render the home page:

![index](screenshots/index.png)

#### /users

should result in a `403` (forbidden)

![users forbidden](screenshots/users-forbidden.png)

### TODO

Experiment with dynamically applying middleware to existing routes. This will
prevent us from having to duplicate authorization. We can load a sitemap from a
remote resource and dynamically attach authorization middleware to route at runtime.
