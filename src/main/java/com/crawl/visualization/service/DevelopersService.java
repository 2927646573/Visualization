package com.crawl.visualization.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.crawl.visualization.entity.Developers;
import com.crawl.visualization.entity.Dto.DevelopersDto;

import java.util.List;

public interface DevelopersService extends IService<Developers> {
    
    List<DevelopersDto> findbytypes();

    List<DevelopersDto> findbylanguages();

    List<DevelopersDto> findbypublishers();
    
    List<DevelopersDto> findbypoints();
}
