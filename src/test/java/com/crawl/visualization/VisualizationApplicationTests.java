package com.crawl.visualization;

import com.crawl.visualization.entity.Dto.DevelopersDto;
import com.crawl.visualization.service.DevelopersService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class VisualizationApplicationTests {
    
    @Autowired
    private DevelopersService developersService;
    
    @Test
    void finbytypes(){
        List<DevelopersDto> types = developersService.findbytypes();
        System.out.println(types);
    }

    @Test
    void findbylanguages(){
        List<DevelopersDto> languages = developersService.findbylanguages();
        System.out.println(languages);
    }

    @Test
    void findbypublishers(){
        List<DevelopersDto> publishersnum = developersService.findbypublishers();
        System.out.println(publishersnum);
    }

    @Test
    void findbypoints(){
        List<DevelopersDto> pointsnum = developersService.findbypoints();
        System.out.println(pointsnum);
    }
}
