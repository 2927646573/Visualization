package com.crawl.visualization.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;

@Data
@TableName("line")
public class Line implements Serializable {
    private String saleTimes;               //年份
    private String action;                  //动作游戏
    private String role;                    //角色扮演
    private String adventure;               //冒险游戏
    private String strategy;                //策略游戏
    private String actionRole;              //动作角色
    private String firstPersonShooting;     //第一人称射击
    private String business;                //模拟经营
    private String sports;                  //体育运动
    private String shooting;                //射击游戏
    private String car;                     //赛车游戏
    private String realTime;                //即时战略
    private String combat;                  //格斗游戏
    private String thirdPersonShooting;     //第三人称射击
    private String leisure;                 //体闲益智
    private String online;                  //网络游戏
    private String toDevelop;               //养成游戏
    private String simulator;               //模拟器类
    private String chess;                   //桌面棋牌
    private String music;                   //音乐游戏
}
