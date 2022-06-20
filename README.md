# go-vs-nodejs
- Sample code run benchmark testing with ApacheBench(ab) in golang and nodejs


## Test example
- Test for Node server
```
$ ab -n 100 -c 10 http://127.0.0.1:3008/fillbuffer
```
- Test for golang server
```
$ ab -n 100 -c 10 http://127.0.0.1:3009/fillbuffer

```

## Information 

- `-n` `requests`: Number of requests to perform for the benchmarking session. The default is to just perform a single request which usually leads to non-representative benchmarking results.

- `-c` `concurrency`: Number of multiple requests to perform at a time. Default is one request at a time.

- `-k`: Enable the HTTP KeepAlive feature, i.e., perform multiple requests within one HTTP session. Default is no KeepAlive.

- `-H` `custom-header`: Append extra headers to the request. The argument is typically in the form of a valid header line, containing a colon-separated field-value pair (i.e., "Accept-Encoding: zip/zop;8bit").

## Usage
Make sure you has run you server on local.
```
ab -n 100 -c 10  http://127.0.0.1:3008/fillbuffer
```
- Start:
    ```
    This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
    Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
    Licensed to The Apache Software Foundation, http://www.apache.org/

    Benchmarking 127.0.0.1 (be patient).....done
    ```
- End: 
    ```

    Server Software:        fasthttp
    Server Hostname:        127.0.0.1
    Server Port:            3008

    Document Path:          /fillbuffer
    Document Length:        25 bytes

    Concurrency Level:      10
    Time taken for tests:   0.006 seconds
    Complete requests:      100
    Failed requests:        0
    Total transferred:      17000 bytes
    HTML transferred:       2500 bytes
    Requests per second:    17211.70 [#/sec] (mean)
    Time per request:       0.581 [ms] (mean)
    Time per request:       0.058 [ms] (mean, across all concurrent requests)
    Transfer rate:          2857.41 [Kbytes/sec] received

    Connection Times (ms)
                min  mean[+/-sd] median   max
    Connect:        0    0   0.1      0       0
    Processing:     0    0   0.1      0       1
    Waiting:        0    0   0.1      0       1
    Total:          0    0   0.1      0       1

    Percentage of the requests served within a certain time (ms)
    50%      0
    66%      1
    75%      1
    80%      1
    90%      1
    95%      1
    98%      1
    99%      1
    100%      1 (longest request)
    ```