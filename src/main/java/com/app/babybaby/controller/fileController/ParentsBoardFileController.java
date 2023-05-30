package com.app.babybaby.controller.fileController;

import lombok.extern.slf4j.Slf4j;
import net.coobird.thumbnailator.Thumbnailator;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

@RestController
@RequestMapping("/parentsBoardFiles/*")
@Slf4j
public class ParentsBoardFileController {

//    private static final String ABSOLUTE_PATH = "C:/upload/ParentsBoard";
//
//    //    파일 업로드
//    @PostMapping("upload")
//    public Map<String, Object> suggestUpload(@RequestParam("file") List<MultipartFile> multipartFiles) throws IOException {
//        Map<String, Object> map = new HashMap<>();
//
//        List<String> uuids = new ArrayList<>();
//        List<String> filePaths = new ArrayList<>();
//        List<String> fileOrgNames = new ArrayList<>();
//        log.info(uuids.toString() + "sadsad");
//        String path = ABSOLUTE_PATH + "/" + getPath();
//        String filePath = "";
//        File file = new File(path);
//        if (!file.exists()) {
//            file.mkdirs();
//        }
//
//        for (int i = 0; i < multipartFiles.size(); i++) {
//            uuids.add(UUID.randomUUID().toString());
//            filePath = uuids.get(i) + "_" + multipartFiles.get(i).getOriginalFilename();
//            /* multipartFiles로 가져온 파일을 path, uuid, fileOriginalName 을 File 객체로 만들어 저장 */
//            multipartFiles.get(i).transferTo(new File(path, uuids.get(i) + "_" + multipartFiles.get(i).getOriginalFilename()));
//
//            /* 해당 파일이 이미지인 경우 썸네일도 저장 */
//            if (multipartFiles.get(i).getContentType().startsWith("image")) {
//                FileOutputStream out = new FileOutputStream(new File(path, "t_" + uuids.get(i) + "_" + multipartFiles.get(i).getOriginalFilename()));
//                InputStream inputStream = new FileInputStream("C:\\upload\\ParentsBoard\\" + getPath() + "\\" + uuids.get(i)+ "_" + multipartFiles.get(i).getOriginalFilename());
//                Thumbnailator.createThumbnail(inputStream, out, 150, 150);
//                out.close();
//                filePath = "t_" + uuids.get(i) + "_" + multipartFiles.get(i).getOriginalFilename();
//            }
//
//            filePaths.add(getPath());
//            fileOrgNames.add(multipartFiles.get(i).getOriginalFilename());
//        }
//
//        map.put("uuids", uuids);
//        map.put("paths", filePaths);
//        map.put("orgNames", fileOrgNames);
//        return map;
//    }
//
//
//
//
//    //    파일 불러오기
//    @GetMapping("display")
//    public byte[] Display(String fileName) throws Exception {
//        return fileName.contentEquals("null") || fileName.isBlank() ? null : FileCopyUtils.copyToByteArray(new File("C:/upload", fileName));
//    }


    //    파일 업로드 하면 Ajax로 들어옴
    @PostMapping("upload")
    @ResponseBody
    public List<String> uploadP (@RequestParam("file") List<MultipartFile> multipartFiles) throws IOException {
        List<String> uuids = new ArrayList<>();
        String path = "/C:/upload/ParentsBoard/" + getPath();
        log.info("path는 " + path);
        File file = new File(path);
        if(!file.exists()) {file.mkdirs();}
        for(int i=0; i < multipartFiles.size(); i++){
            uuids.add(UUID.randomUUID().toString());
            multipartFiles.get(i).transferTo(new File(path, uuids.get(i) + "_" + multipartFiles.get(i).getOriginalFilename()));
        }
        return uuids;
    }

    //  파일 불러오기
    @GetMapping("display")
    @ResponseBody
    public byte[] display(String fileName) throws IOException {
        return FileCopyUtils.copyToByteArray(new File("/C:/upload", fileName));
    }
























    //    현재 날짜 경로 구하기
    private String getPath() {
        return LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
    }
}