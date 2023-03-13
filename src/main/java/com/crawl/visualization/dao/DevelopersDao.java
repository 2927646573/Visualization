package com.crawl.visualization.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.crawl.visualization.entity.Developers;
import com.crawl.visualization.entity.Dto.DevelopersDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface DevelopersDao extends BaseMapper<Developers> {
    //查询各类型游戏总数所占比
    @Select("SELECT TYPES,COUNT(TYPES) as number FROM developers GROUP BY TYPES ORDER BY COUNT(TYPES) DESC;")
    List<DevelopersDto> findbytypes();
    //查询各游戏语言适配占比
    @Select("SELECT classification_of_languages,COUNT(classification_of_languages) as languages FROM developers GROUP BY classification_of_languages ORDER BY COUNT(classification_of_languages) DESC;")
    List<DevelopersDto> findbylanguages();
    //查询游戏发行商
    @Select("SELECT publishers,COUNT(publishers) as publishersnum FROM developers GROUP BY publishers ORDER BY COUNT(publishers) DESC;")
    List<DevelopersDto> findbypublishers();
    //查询每年评分9.0以上游戏的数量
    @Select("SELECT sale_times,COUNT(points) as pointsnum FROM developers where points >= '9.0' group by sale_times ORDER BY COUNT(points) DESC;")
    List<DevelopersDto> findbypoints();

}
