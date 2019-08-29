package com.ipicascadeteam.mesi.level;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class LevelMapper {

    public List<LevelDto> levelsToLevelDtos(List<Level> levels) {
        return levels.stream()
            .filter(Objects::nonNull)
            .map(this::levelToLevelDto)
            .collect(Collectors.toList());
    }

    public LevelDto levelToLevelDto(Level level) {
        return new LevelDto(level);
    }

    public List<LevelMechanic> levelsToLevelMechanics(List<Level> levels) {
        return levels.stream()
            .filter(Objects::nonNull)
            .map(this::levelToLevelMechanic)
            .collect(Collectors.toList());
    }

    public LevelMechanic levelToLevelMechanic(Level level) {
        return new LevelMechanic(level);
    }

    public Level levelMechanicToLevel(LevelMechanic levelMechanic) {
        if (levelMechanic == null) {
            return null;
        } else {
            Level level = new Level();
            
            return level;
        }
    }
}
