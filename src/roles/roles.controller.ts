import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { ApiResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Role } from "./roles.model";

@ApiTags("Roles")
@Controller("roles")
export class RolesController {
  constructor(private roleServise: RolesService) {}

  @ApiOperation({ summary: "Creating role" })
  @ApiResponse({ status: 201, type: Role })
  @Post()
  create(@Body() roleDto: CreateRoleDto) {
    return this.roleServise.createRole(roleDto);
  }

  @ApiOperation({ summary: "Getting role by value" })
  @ApiResponse({ status: 200, type: Role })
  @Get("/:value")
  getByValue(@Param("value") value: string) {
    return this.roleServise.getRoleByValue(value);
  }
}
