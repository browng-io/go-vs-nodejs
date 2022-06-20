# go-vs-nodejs
- Sample code run benchmark testing with ApacheBench(ab) in golang and nodejs


## Testing with Node server
```
#run with  100 concurrent connection
$ ab -n 1000000 -c 100 127.0.0.1:3008/fillbuffer 

# run with  500 concurrent connection
$ ab -c 500 -n 1000000 127.0.0.1:3008/fillbuffer
```
## Testing with golang server
```
# run with  100 concurrent connection
$ ab -c 100 -n 1000000 127.0.0.1:3009/fillbuffer 

# run with  500 concurrent connection
$ ab -c 500 -n 1000000 127.0.0.1:3009/fillbuffer 
```
