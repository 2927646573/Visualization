package com.crawl.visualization.entity.Dto;

import com.crawl.visualization.entity.Developers;
import lombok.Data;

@Data
public class DevelopersDto extends Developers {
    private Integer number;
    private Integer languages;
    private Integer publishersnum;
    private Integer pointsnum;
    private Integer pointsnum2;
}
