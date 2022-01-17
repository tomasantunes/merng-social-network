# merng-social-network
MERNG Social Network.

Taken from https://www.youtube.com/watch?v=n1mdAPFq2Os

## Differences from the video
- You need to install previous version of apollo server to have the subscription.
- We no longer need to import multiple packages for the apollo client. They're all in '@apollo/client'.
- The React router has been changed in version 6.
- props.history.push has been changed to the useNavigate hook.
- AuthRoute has been changed according to version 6 of React router.
- To write directly on the cache you need to make a copy of the data you read.
