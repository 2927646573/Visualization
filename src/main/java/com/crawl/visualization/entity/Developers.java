package com.crawl.visualization.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;

@Data
@TableName("developers")
public class Developers implements Serializable {
    //游戏名
    private String gameNames;
    //游戏发售时间
    private String saleTimes;
    //游戏发行商
    private String publishers;
    //游戏开发商
    private String developers;
    //游戏类型
    private String types;
    //游戏发布平台
    private String publishingPlatforms;
    //游戏语言分类
    private String classificationOfLanguages;
    //游戏评分
    private String points;
}
