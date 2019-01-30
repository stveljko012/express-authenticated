# ts-express-authenticated

ts-express-authenticated is simple TypeScript decorator for express handler functions to validate body before function called. It checks if request is authenticated and call handler function or sends status of 401 with 'Unathorized access.' message.

## Installation

Use the package manager [npm](https://www.npmjs.com) to install express-body-params decorator.

```bash
npm i ts-express-authenticated
```

## Usage
#### By defaut decorator checks if __req.authed__ param is setted to true:

```typescript
import { Authenticated } from 'ts-express-authenticated';


@Authenticated()
async getPayments(req: any, res: any): Promise<void> {
	...
}
```

#### You can change parameter to check by passing it as parameter:

```typescript
import { Authenticated } from 'ts-express-authenticated';


@Authenticated('isAuthenticated')
async getPayments(req: any, res: any): Promise<void> {
    ...
}
```

#### You can change message for unauthorized case:

```typescript
import { Authenticated } from 'ts-express-authenticated';


@Authenticated('isAuthenticated', 'You are not authorized for this route.')
async getPayments(req: any, res: any): Promise<void> {
    ...
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Please star me on github. [stveljko012](https://github.com/stveljko012)

## License
[MIT](https://choosealicense.com/licenses/mit/)