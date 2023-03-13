package com.crawl.visualization.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.crawl.visualization.entity.Line;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface LineDao extends BaseMapper<Line> {
    
}
