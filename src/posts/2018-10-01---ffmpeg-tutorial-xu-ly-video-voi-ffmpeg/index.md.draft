---
title: "[FFmpeg tutorial] Những câu lệnh FFmpeg xử lý video"
date: "2018-10-01T21:01:18.083Z"
categories: ["FFmpeg tutorial"]
tags: ["tutorial"]
keywords: "câu lệnh ffmpeg xử lý video"
thumbnail: "/images/ffmpeg-tutorial-xu-ly-video-voi-ffmpeg.png"
type: "standard"
---

FFmpeg là một công cụ miễn phí mà rất mạnh trong việc xử lý hình ảnh, video, audio,... Nếu bạn chưa biết cách cài đặt FFmpeg, vui lòng tham khảo thêm tại bài viết [hướng dẫn tìm hiểu FFmpeg cơ bản](https://completejavascript.com/huong-dan-tim-hieu-ffmpeg-co-ban/). Còn trong bài viết này, mình sẽ giúp bạn tổng hợp những câu lệnh FFmpeg xử lý video đơn giản và hiệu quả nhất. Mời bạn theo dõi bài viết!

## Thay đổi kích thước video

### Thay đổi kích thước video với kích thước xác định

Nếu bạn đơn giản muốn thay đổi kích thước video thành một kích thước xác định trước, thì bạn có thể sử dụng câu lệnh sau:

```batch
ffmpeg -i input.mp4 -vf scale=320:240 output.mp4
```

Trong đó:

  * *ffmpeg*: tên chương trình
  * _-i_: cờ xác định đầu vào (input)
  * *input.mp4*: tên video đầu vào
  * _-vf_: cờ xác định biểu thức cho việc scale video
  * *scale=320:240*: biểu thức để scale video
  * *output.mp4*: tên video đầu ra

Câu lệnh này scale video thành kích thước 320x240 (width=320 và height=240). Lúc này toàn bộ video sẽ bị co hoặc dãn đến kích thước 320x240.

### Thay đổi kích thước video giữ nguyên tỉ lệ

Nếu chỉ sử dụng câu lệnh như trên thì rất có thể tỉ lệ width/height của video sẽ bị thay đổi, dẫn đến hình ảnh bị méo mó. Do đó, để giữ nguyên tỉ lệ video bạn có thể thay đổi câu lệnh trên một chút, bằng cách chỉ xác định width hoặc height, chiều còn lại bạn để -1, như sau đây. 

Giữ nguyên chiều rộng:

```batch
ffmpeg -i input.mp4 -vf scale=320:-1 output.mp4
```

Giữ nguyên chiều cao:

```batch
ffmpeg -i input.mp4 -vf scale=-1:240 output.mp4
```

**Chú ý:** Một vài định dạng video yêu cầu chiều dài, chiều rộng phải chia hết cho số **n** (thường n = 2). Khi đó, bạn chỉ cần thay _-1_ thành _-n_.

Giữ nguyên chiều rộng:

```batch
ffmpeg -i input.mp4 -vf scale=320:-n output.mp4
```

Giữ nguyên chiều cao:

```batch
ffmpeg -i input.mp4 -vf scale=-n:240 output.mp4
```

### Thay đổi kích thước video sử dụng biến số

Nhiều khi bạn sẽ muốn thay đổi kích thước video bằng cách nhân/chia chiều rộng/cao cho một số bất kỳ. Lúc này bạn có thể sử dụng biến số iw (chiều rộng), ih (chiều cao). Ví dụ, để tăng kích thước chiều rộng và chiều cao của video lên 2 lần bạn có thể sử dụng câu lệnh sau:

```batch
ffmpeg -i input.mp4 -vf scale=iw*2:ih*2 output.mp4
```

Ngược lại, nếu bạn muốn giảm kích thước video đi 2 lần, bạn có thể nhân 2 kích thước với 0.5:

```batch
ffmpeg -i input.mp4 -vf scale=iw*0.5:ih*0.5 output.mp4
```

hoặc chia 2 kích thước cho 2:

```batch
ffmpeg -i input.mp4 -vf scale=iw/2:ih/2 output.mp4
```

### Tránh tăng kích thước của video có kích thước quá nhỏ

Giả sử, bạn muốn thu nhỏ kích thước video xuống thành 320x240. Nhưng thực tế, kích thước của video đã nhỏ hơn 320x240 rồi. Khi đó, bạn muốn giữ nguyên kích thước của video. Hay nói cách khác, bạn sẽ chỉ thu nhỏ kích thước của video xuống 320x240 nếu kích thước thực tế lớn hơn 320x240.

Lúc này, bạn có thể sử dụng biểu thức *min*:

```batch
ffmpeg -i input.mp4 -vf scale='min(320,iw)':'min(240,ih)' output.mp4
```

### Làm cho video phù hợp với khung hình có sẵn

Trong trường hợp bạn muốn video của mình có kích thước phù hợp với một khung hình chữ nhật cho trước, mà vẫn muốn giữ nguyên tỉ lệ width/height. Khi đó bạn có thể sử dụng option *force\_original\_aspect\_ratio* với 2 giá trị là:

  * *decrease*: video đầu ra sẽ tự động giảm kích thước nếu cần thiết 
  * *increase*: video đầu ra sẽ tự động tăng kích thước nếu cần thiết

Ví dụ: đoạn code sau sẽ giảm kích thước của video để phù hợp với khung hình 320x240:

```batch
ffmpeg -i input.mp4 -vf scale=w=320:h=240:force_original_aspect_ratio=decrease output.mp4
```

Vì bạn giữ nguyên tỉ lệ video, nên rất có thể sẽ xuất hiện khoảng trống của video so với khung hình. Lúc này, bạn có thể sử dụng filter *pad* để điền đầy màu đen vào khoảng trống kia:

```batch
ffmpeg -i input.mp4 -vf "scale=320:240:force_original_aspect_ratio=decrease,pad=320:240:(ow-iw)/2:(oh-ih)/2" output.mp4
```

### Xác định thuật toán scale

FFmpeg hỗ trợ nhiều loại thuật toán để scale video, bao gồm: *fast_bilinear, bilinear, bicubic, experimental, neighbor, area, bicublin, gauss, sinc, lanczos, spline, accurate_rnd, full_chroma_int, full_chroma_inp, bitexact*. Thuật toán mặc định là: *bicubic*.

Để có thể lựa chọn thuật toán thay đổi kích thước video, bạn cần sử dụng option *\-sws\_flags*. 

Ví dụ, bạn muốn sử dụng thuật toán *bilinear* thay vì thuật toán mặc định *bicubic* thì có thể sử dụng câu lệnh sau:

```batch
ffmpeg -i input.mp4 -vf scale=320:240 -sws_flags bilinear output.mp4
```

Để sử dụng nhiều giá trị cho cờ trên, bạn có thể sử dụng dấu +, ví dụ:

```batch
ffmpeg -i input.mp4 -vf scale=320:240 -sws_flags lanczos+full_chroma_inp output.mp4
```

## Thay đổi định dạng video

```batch
ffmpeg -i input.xxx output.yyy
```

Trong đó:
  * File đầu vào là *input.xxx* với xxx là các định dạng video của file đầu vào: mp4, avi, mpg, flv,…
  * File đầu ra là *output.yyy* với yyy cũng là các định dạng video của file đầu vào: mp4, avi, mpg, flv,…

Ví dụ, mình muốn chuyển từ định dạng mp4 sang flv, thì câu lệnh sẽ là:

```batch
ffmpeg -i input.mp4 output.flv
```

## Thay đổi framerate của video

Video thường có rất nhiều giá trị framerate khác nhau như: 24, 25, 29.97, 30, 60,... Khi bạn muốn ghép nhiều video với nhau thì một trong những việc bạn cần phải làm là đưa chúng về cùng framerate.

Ví dụ, câu lệnh sau sẽ thay đổi framerate của video thành 25 (frame/second):

```batch
ffmpeg -i input.mp4 -r 25 output.mp4
```

## Encode video thành chuẩn H264

Chuẩn H264 (MPEG-4 Part 10, MPEG-4 AVC) là một chuẩn mã hoá video rất phổ biến. Những video theo chuẩn H264 thường có đuôi là _.mp4_. Vì vậy, những video theo chuẩn này có thể play trên rất nhiều thiết bị khác nhau.

Để encode video thành chuẩn H264, bạn có thể sử dụng 2 phương pháp: [Constant Rate Factor (CRF)](https://trac.ffmpeg.org/wiki/Encode/H.264#crf) hoặc [Two-Pass ABR](https://trac.ffmpeg.org/wiki/Encode/H.264#twopass). Tuy nhiên, mình thấy phương pháp CRF có vẻ đơn giản hơn. 

Ví dụ câu lệnh sau sẽ encode video về chuẩn H264 sử dụng CRF:

```batch
ffmpeg -i input.avi -c:v libx264 -preset slow -crf 22 -c:a copy output.mp4
```

Ngoài những thứ cơ bản mà mình đã nói ở các phần trên thì những thông tin bạn cần phải quan tâm đó là:

  * _-c:v_: cờ dùng để xác định thư viện dùng để encode h264
  * _libx264_: tên thư viện dùng để encode h264. Ngoài *libx264*, bạn có thể sử dụng lib *h264*. Nói vậy thôi, nhưng thực tế, *h264* chỉ free cho việc decode h264. Trong khi đó, *libx264* là free, open source cho cả decode và encode. Vì vậy, bạn nên sử dụng *libx264*.
  * _-preset_: cờ dùng để xác định preset được sử dụng. Giá trị này sẽ quyết định tốc độ mã hoá.
  * _slow_: tên preset sử dụng. Ngoài *slow*, bạn có thể dùng: *ultrafast, superfast, veryfast, faster, fast, medium (default preset), slow, slower, veryslow*. Trong dãy các giá trị trên, từ trái sang phải sẽ cho chất lượng video tăng dần, nhưng tốc độ mã hoá sẽ giảm dần. Hay nói cách khác, tốc độ mã hoá video càng chậm thì chất lượng video càng tốt.
  * _-crf_: cờ xác định hệ số CRF.
  * _22_: hệ số CRF. Giá trị CRF có thể là từ 0 đến 51, với giá trị mặc định là 23. Giá trị CRF càng lớn thì chất lượng video càng giảm và ngược lại.
  * _-c:a_: cờ dùng để xác định thư viện encode audio.
  * _copy_: trong bài viết này, mình chỉ quan tâm tới video, nên audio sẽ không thay đổi. Hay nó sẽ được copy từ input sang output.

## Thay đổi bitrate của video

Giả sử bạn đang muốn Live Streaming một video. Video này có bitrate cỡ 5Mbps. Tuy nhiên, tốc độ mạng cho phép chỉ trong khoảng 1Mbps. Lúc này, bạn cần phải giảm bitrate của video xuống nhỏ hơn 1Mbps.

Ví dụ câu lệnh sau sẽ giới hạn bitrate của video xuống nhỏ hơn hoặc bằng 1Mbps:

```batch
ffmpeg -i input -c:v libx264 -crf 23 -maxrate 1M -bufsize 2M output.mp4
```

Trong đó, những giá trị quan trọng là:

  * _-maxrate 1M_: xác định bitrate tối đa là 1Mbps
  * _-bufsize 2M_: xác định buffer cho việc encode video là 2MB.
  * _-crf 23_: xác định hệ số CRF là 23

## Lời kết

Trên đây là một số câu lệnh FFmpeg xử lý video rất phổ biến. Nếu có câu lệnh nào bạn chưa hiểu hoặc bạn cần phải xử lý video về một khía cạnh nào đó mà mình chưa chia sẻ thì bạn có thể để lại câu hỏi trong phần bình luận, mình sẽ cố gắng sưu tầm và chia sẻ lại với bạn.

Xin chào và hẹn gặp lại trong bài viết tiếp theo, thân ái!

### Tham khảo

  * [Scaling](https://trac.ffmpeg.org/wiki/Scaling)
  * [Encode/H264](https://trac.ffmpeg.org/wiki/Encode/H.264)
  * [Re-sampling H264 video to reduce frame rate while maintaining high image quality](https://stackoverflow.com/questions/11004137/re-sampling-h264-video-to-reduce-frame-rate-while-maintaining-high-image-quality)
  * [Resizing videos with ffmpeg/avconv to fit into static sized player](https://superuser.com/questions/547296/resizing-videos-with-ffmpeg-avconv-to-fit-into-static-sized-player/1136305#1136305)