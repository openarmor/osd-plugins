/*
 * Wazuh app - GitHub sample data
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

export const LOCATION = 'github';

export const DECODER = { "name": "json" };

export const COUNTRY_CODES = [
  'AR',
  'CA',
  'DE',
  'ES',
  'FR',
  'GR',
  'IN',
  'MX',
  'SE',
  'US'
];

const baseElements = Array(10).fill();

export const ORGANIZATION_NAMES = baseElements.map((_, index) => `Organization${index + 1}`);

export const USER_NAMES = baseElements.map((_, index) => `User${index + 1}`);

export const REPOSITORY_NAMES = baseElements.map((_, index) => `Repo${index + 1}`);

export const ACTORS = baseElements.map((_, index) => ({ name: USER_NAMES[index], country_code: COUNTRY_CODES[index] }));

export const SERVER_ADDRESS_WEBHOOK = [
  'https://server/webhook',
  'https://cool_server/integrations/webhook',
  'https://another_server/github_notifications',
  'https://my_web/notifications/webhook',
];

export const ALERT_TYPES = [
  { "rule": { "level": 5, "description": "GitHub Organization audit log export.", "id": "91193", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_org"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624444988681.000000", "org": "_ORGANIZATION_", "created_at": "1624444988681.000000", "action": "org.audit_log_export", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "_document_id": "ElEQJvOCnhWZ2mVpjzYOMw" } } },
  { "rule": { "level": 5, "description": "GitHub Team create.", "id": "91397", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_team"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624445678369.000000", "org": "_ORGANIZATION_", "created_at": "1624445678369.000000", "action": "team.create", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "team": "_ORGANIZATION_/_REPOSITORY_", "_document_id": "cC4uIXPNDz1O1G21Vjs8Vw" } } },
  { "rule": { "level": 5, "description": "GitHub Team add member.", "id": "91393", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_team"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624445678470.000000", "org": "_ORGANIZATION_", "created_at": "1624445678470.000000", "action": "team.add_member", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "team": "_ORGANIZATION_/_REPOSITORY_", "user": "_USER_", "_document_id": "0Z4NBBhHM2T4gEuWziZfvQ" } } },
  { "rule": { "level": 5, "description": "GitHub Team add member.", "id": "91393", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_team"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624445927571.000000", "org": "_ORGANIZATION_", "created_at": "1624445927571.000000", "action": "team.add_member", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "team": "_ORGANIZATION_/_REPOSITORY_", "user": "_USER_", "_document_id": "Hi6dpYdi9G5PrEqqTkEYnA" } } },
  { "rule": { "level": 5, "description": "GitHub Repo create.", "id": "91318", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_repo"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624445965569.000000", "visibility": "private", "org": "_ORGANIZATION_", "repo": "_ORGANIZATION_/_REPOSITORY_", "created_at": "1624445965569.000000", "action": "repo.create", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "_document_id": "fXwGe7IW-BX8Ze64V_AORg" } } },
  { "rule": { "level": 3, "description": "GitHub Git clone.", "id": "91158", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_git"] }, "data": { "integration": "github", "github": { "@timestamp": "1624445969188.000000", "org": "_ORGANIZATION_", "repo": "_ORGANIZATION_/_REPOSITORY_", "action": "git.clone", "transport_protocol_name": "http", "transport_protocol": "1", "repository": "_ORGANIZATION_/_REPOSITORY_", "repository_public": "false" } } },
  { "rule": { "level": 3, "description": "GitHub Git clone.", "id": "91158", "firedtimes": 2, "mail": false, "groups": ["github", "git", "git_git"] }, "data": { "integration": "github", "github": { "@timestamp": "1624446009635.000000", "org": "_ORGANIZATION_", "repo": "_ORGANIZATION_/_REPOSITORY_", "action": "git.clone", "transport_protocol_name": "http", "transport_protocol": "1", "repository": "_ORGANIZATION_/_REPOSITORY_", "repository_public": "false" } } },
  { "rule": { "level": 5, "description": "GitHub Organization audit log export.", "id": "91193", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_org"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624446236415.000000", "org": "_ORGANIZATION_", "created_at": "1624446236415.000000", "action": "org.audit_log_git_event_export", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "_document_id": "vkV52PbNTZPJRRNLuOZcuw" } } },
  { "rule": { "level": 5, "description": "GitHub Organization audit log export.", "id": "91193", "firedtimes": 2, "mail": false, "groups": ["github", "git", "git_org"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624446254661.000000", "org": "_ORGANIZATION_", "created_at": "1624446254661.000000", "action": "org.audit_log_export", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "_document_id": "gwkccTbAcX2WujhEXS3r0Q" } } },
  { "rule": { "level": 5, "description": "GitHub Team create.", "id": "91397", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_team"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624446278480.000000", "org": "_ORGANIZATION_", "created_at": "1624446278480.000000", "action": "team.create", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "team": "_ORGANIZATION_/_REPOSITORY_", "_document_id": "Qf6RhFYhb7ysdV8K8ukYFw" } } },
  { "rule": { "level": 5, "description": "GitHub Team add member.", "id": "91393", "firedtimes": 2, "mail": false, "groups": ["github", "git", "git_team"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624446278606.000000", "org": "_ORGANIZATION_", "created_at": "1624446278606.000000", "action": "team.add_member", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "team": "_ORGANIZATION_/_REPOSITORY_", "user": "_USER_", "_document_id": "T6DZ-t0-a9yQShoBbUxc_g" } } },
  { "rule": { "level": 7, "description": "GitHub Team destroy.", "id": "91399", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_team"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624446293390.000000", "org": "_ORGANIZATION_", "created_at": "1624446293390.000000", "action": "team.destroy", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "team": "_ORGANIZATION_/_REPOSITORY_", "_document_id": "ZLC0q4Ka_R4gGw3gWgxc3w" } } },
  { "rule": { "level": 7, "description": "GitHub Team remove member.", "id": "91401", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_team"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624446387691.000000", "org": "_ORGANIZATION_", "created_at": "1624446387691.000000", "action": "team.remove_member", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "team": "_ORGANIZATION_/backend", "user": "_USER_", "_document_id": "PYn3TOghg5FYze673svhgw" } } },
  { "rule": { "level": 5, "description": "GitHub Team add member.", "id": "91393", "firedtimes": 3, "mail": false, "groups": ["github", "git", "git_team"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624446397464.000000", "org": "_ORGANIZATION_", "created_at": "1624446397464.000000", "action": "team.add_member", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "team": "_ORGANIZATION_/backend", "user": "_USER_", "_document_id": "z4qIP_kjzjnilIhL8ak0mg" } } },
  { "rule": { "level": 3, "description": "GitHub Dependency graph new repos enable.", "id": "91131", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_dependency_graph_new_repos"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624446915154.000000", "org": "_ORGANIZATION_", "created_at": "1624446915154.000000", "action": "dependency_graph_new_repos.enable", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "user": "_USER_", "_document_id": "2Az9XCqb-Fe8k0KkLQlk0A" } } },
  { "rule": { "level": 12, "description": "GitHub Dependency graph new repos disable.", "id": "91130", "firedtimes": 1, "mail": true, "groups": ["github", "git", "git_dependency_graph_new_repos"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624446916718.000000", "org": "_ORGANIZATION_", "created_at": "1624446916718.000000", "action": "dependency_graph_new_repos.disable", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "user": "_USER_", "_document_id": "TzBGANy3SmrnxI8GW9bpQA" } } },
  { "rule": { "level": 5, "description": "GitHub Hook create.", "id": "91162", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_hook"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624446982688.000000", "org": "_ORGANIZATION_", "hook_id": "303999727", "name": "webhook", "created_at": "1624446982688.000000", "action": "hook.create", "active": "true", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "config": { "content_type": "json", "insecure_ssl": "0", "secret": "********", "url": "_SERVER_ADDRESS_WEBHOOK_" }, "events": ["push"], "_document_id": "SSlObiXNNtzQzxFooK4-fw" } } },
  { "rule": { "level": 5, "description": "GitHub Hook events changed.", "id": "91165", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_hook"] }, "data": { "integration": "github", "github": { "org": "_ORGANIZATION_", "created_at": "1624447042505.000000", "active": "true", "actor": "_USER_", "@timestamp": "1624447042505.000000", "hook_id": "303999727", "name": "webhook", "action": "hook.events_changed", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "config": { "content_type": "json", "insecure_ssl": "0", "secret": "********", "url": "_SERVER_ADDRESS_WEBHOOK_" }, "events": ["push", "create", "deployment", "fork", "issues"], "_document_id": "Ba9NJbFnSfJB1zGEn29asw", "events_were": ["push"] } } },
  { "rule": { "level": 3, "description": "GitHub Git clone.", "id": "91158", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_git"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624447139607.000000", "org": "_ORGANIZATION_", "repo": "_ORGANIZATION_/_REPOSITORY_", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "action": "git.clone", "transport_protocol_name": "http", "transport_protocol": "1", "repository": "_ORGANIZATION_/_REPOSITORY_", "repository_public": "false" } } },
  { "rule": { "level": 3, "description": "GitHub Git push.", "id": "91160", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_git"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624447520462.000000", "org": "_ORGANIZATION_", "repo": "_ORGANIZATION_/_REPOSITORY_", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "action": "git.push", "transport_protocol_name": "http", "transport_protocol": "1", "repository": "_ORGANIZATION_/_REPOSITORY_", "repository_public": "false" } } },
  { "rule": { "level": 3, "description": "GitHub Git push.", "id": "91160", "firedtimes": 2, "mail": false, "groups": ["github", "git", "git_git"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624447522682.000000", "org": "_ORGANIZATION_", "repo": "_ORGANIZATION_/_REPOSITORY_", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "action": "git.push", "transport_protocol_name": "http", "transport_protocol": "1", "repository": "_ORGANIZATION_/_REPOSITORY_", "repository_public": "false" } } },
  { "rule": { "level": 3, "description": "GitHub Git clone.", "id": "91158", "firedtimes": 2, "mail": false, "groups": ["github", "git", "git_git"] }, "data": { "integration": "github", "github": { "@timestamp": "1624447527007.000000", "org": "_ORGANIZATION_", "repo": "_ORGANIZATION_/_REPOSITORY_", "action": "git.clone", "transport_protocol_name": "http", "transport_protocol": "1", "repository": "_ORGANIZATION_/_REPOSITORY_", "repository_public": "false" } } },
  { "rule": { "level": 5, "description": "GitHub Repo create.", "id": "91318", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_repo"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624447568303.000000", "visibility": "private", "org": "_ORGANIZATION_", "repo": "_ORGANIZATION_/_REPOSITORY_", "created_at": "1624447568303.000000", "action": "repo.create", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "_document_id": "AcrdSmMW0PpEEmuGWiTcoQ" } } },
  { "rule": { "level": 9, "description": "GitHub Repo destroy.", "id": "91320", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_repo"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624447588615.000000", "visibility": "private", "org": "_ORGANIZATION_", "repo": "_ORGANIZATION_/_REPOSITORY_", "created_at": "1624447588615.000000", "action": "repo.destroy", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "_document_id": "H-bRCuWh_FAoZxzW8BV9JA" } } },
  { "rule": { "level": 3, "description": "GitHub Git fetch.", "id": "91159", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_git"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624447744877.000000", "org": "_ORGANIZATION_", "repo": "_ORGANIZATION_/_REPOSITORY_", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "action": "git.fetch", "transport_protocol_name": "http", "transport_protocol": "1", "repository": "_ORGANIZATION_/_REPOSITORY_", "repository_public": "false" } } },
  { "rule": { "level": 7, "description": "GitHub Organization update default repository permission.", "id": "91231", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_org"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448015027.000000", "org": "_ORGANIZATION_", "created_at": "1624448015027.000000", "action": "org.update_default_repository_permission", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "_document_id": "BHpvG7xc2bTNW3ME3nAgDw" } } },
  { "rule": { "level": 7, "description": "GitHub Organization update default repository permission.", "id": "91231", "firedtimes": 2, "mail": false, "groups": ["github", "git", "git_org"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448020670.000000", "org": "_ORGANIZATION_", "created_at": "1624448020670.000000", "action": "org.update_default_repository_permission", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "_document_id": "t5ZumMJeWBs2CqZT-n4JNA" } } },
  { "rule": { "level": 7, "description": "GitHub Organization update member repository creation permission.", "id": "91233", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_org"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448034735.000000", "visibility": "private_internal", "org": "_ORGANIZATION_", "created_at": "1624448034735.000000", "action": "org.update_member_repository_creation_permission", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "_document_id": "CAwbh8KpE75aa0ajCpRISw" } } },
  { "rule": { "level": 7, "description": "GitHub Organization update member repository creation permission.", "id": "91233", "firedtimes": 2, "mail": false, "groups": ["github", "git", "git_org"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448038247.000000", "visibility": "internal", "org": "_ORGANIZATION_", "created_at": "1624448038247.000000", "action": "org.update_member_repository_creation_permission", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "_document_id": "s96ibVD5sEyRDxYgQ8gKhQ" } } },
  { "rule": { "level": 9, "description": "GitHub Private repository forking enable.", "id": "91273", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_private_repository_forking"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448046546.000000", "org": "_ORGANIZATION_", "created_at": "1624448046546.000000", "action": "private_repository_forking.enable", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "user": "_USER_", "_document_id": "NZWBrO2Ac02LnG3TFeEykA" } } },
  { "rule": { "level": 5, "description": "GitHub Private repository forking disable.", "id": "91274", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_private_repository_forking"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448051193.000000", "org": "_ORGANIZATION_", "created_at": "1624448051193.000000", "action": "private_repository_forking.disable", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "user": "_USER_", "_document_id": "5EkgWPa8Du6ZJ_5oOfU_rg" } } },
  { "rule": { "level": 3, "description": "GitHub Generic rule.", "id": "91449", "firedtimes": 1, "mail": false, "groups": ["github", "git"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448069427.000000", "org": "_ORGANIZATION_", "created_at": "1624448069427.000000", "action": "members_can_create_private_pages.disable", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "user": "_USER_", "_document_id": "0rtyFg2GD2-oJyJsOtRZ_A" } } },
  { "rule": { "level": 3, "description": "GitHub Generic rule.", "id": "91449", "firedtimes": 2, "mail": false, "groups": ["github", "git"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448073290.000000", "org": "_ORGANIZATION_", "created_at": "1624448073290.000000", "action": "members_can_create_private_pages.enable", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "user": "_USER_", "_document_id": "sSbImF40N-hLe0mfDHkfMg" } } },
  { "rule": { "level": 3, "description": "GitHub Generic rule.", "id": "91449", "firedtimes": 3, "mail": false, "groups": ["github", "git"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448089991.000000", "org": "_ORGANIZATION_", "created_at": "1624448089991.000000", "action": "repository_visibility_change.enable", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "user": "_USER_", "_document_id": "dWJ-7ZR6DdumQeu01PAGig" } } },
  { "rule": { "level": 3, "description": "GitHub Issues.", "id": "91169", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_issues"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448109958.000000", "org": "_ORGANIZATION_", "created_at": "1624448109958.000000", "action": "issues.deletes_enabled", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "user": "_USER_", "_document_id": "gWT0UNMVFaI8ZPB3tGGsew" } } },
  { "rule": { "level": 3, "description": "GitHub Issues.", "id": "91169", "firedtimes": 2, "mail": false, "groups": ["github", "git", "git_issues"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448114493.000000", "org": "_ORGANIZATION_", "created_at": "1624448114493.000000", "action": "issues.deletes_disabled", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "user": "_USER_", "_document_id": "T2hgq3r3yVD23Np6CAD-zQ" } } },
  { "rule": { "level": 5, "description": "GitHub Organization display commenter full name enabled.", "id": "91202", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_org"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448121171.000000", "org": "_ORGANIZATION_", "created_at": "1624448121171.000000", "action": "org.display_commenter_full_name_enabled", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "user": "_USER_", "_document_id": "o-Edi8owvz1iPv78RPPSJw" } } },
  { "rule": { "level": 3, "description": "GitHub Organization.", "id": "91188", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_org"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448125116.000000", "org": "_ORGANIZATION_", "created_at": "1624448125116.000000", "action": "org.display_commenter_full_name_disabled", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "user": "_USER_", "_document_id": "OxJjqpug2FM8RJuzE1CZpA" } } },
  { "rule": { "level": 3, "description": "GitHub Organization.", "id": "91188", "firedtimes": 2, "mail": false, "groups": ["github", "git", "git_org"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448133245.000000", "org": "_ORGANIZATION_", "created_at": "1624448133245.000000", "action": "org.enable_reader_discussion_creation_permission", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "user": "_USER_", "_document_id": "5KmA_VkQPn3I6gY4L8qFPA" } } },
  { "rule": { "level": 3, "description": "GitHub Organization.", "id": "91188", "firedtimes": 3, "mail": false, "groups": ["github", "git", "git_org"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448138392.000000", "org": "_ORGANIZATION_", "created_at": "1624448138392.000000", "action": "org.disable_reader_discussion_creation_permission", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "user": "_USER_", "_document_id": "JQ3JAd3zHmpRpGZYJsJIQw" } } },
  { "rule": { "level": 5, "description": "GitHub Organization enable member team creation permission.", "id": "91203", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_org"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448148271.000000", "org": "_ORGANIZATION_", "created_at": "1624448148271.000000", "action": "org.enable_member_team_creation_permission", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "user": "_USER_", "_document_id": "sd2fnKW-Jc_OZI9xm2pyyQ" } } },
  { "rule": { "level": 9, "description": "GitHub Organization disable member team creation permission.", "id": "91198", "firedtimes": 1, "mail": false, "groups": ["github", "git", "git_org"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448154972.000000", "org": "_ORGANIZATION_", "created_at": "1624448154972.000000", "action": "org.disable_member_team_creation_permission", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "user": "_USER_", "_document_id": "ppjVxGQBAQts82at9Az3XQ" } } },
  { "rule": { "level": 12, "description": "GitHub Repository vulnerability alerts disable.", "id": "91367", "firedtimes": 1, "mail": true, "groups": ["github", "git", "git_repository_vulnerability_alerts"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448419210.000000", "org": "_ORGANIZATION_", "repo": "_ORGANIZATION_/_REPOSITORY_", "created_at": "1624448419210.000000", "action": "repository_vulnerability_alerts.disable", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "user": "_USER_", "_document_id": "wgf0uCen5LG4su6jQ2xKDA" } } },
  { "rule": { "level": 5, "description": "GitHub Repo create.", "id": "91318", "firedtimes": 2, "mail": false, "groups": ["github", "git", "git_repo"] }, "data": { "integration": "github", "github": { "actor": "_USER_", "@timestamp": "1624448419470.000000", "visibility": "public", "org": "_ORGANIZATION_", "repo": "_ORGANIZATION_/_REPOSITORY_", "created_at": "1624448419470.000000", "action": "repo.create", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "_document_id": "oLAjZ_DbHvzZlPmRCXr4MA" } } },
  { "rule": { "level": 3, "description": "GitHub Git clone.", "id": "91158", "firedtimes": 3, "mail": false, "groups": ["github", "git", "git_git"] }, "data": { "integration": "github", "github": { "@timestamp": "1624448422207.000000", "org": "_ORGANIZATION_", "repo": "_ORGANIZATION_/_REPOSITORY_", "action": "git.clone", "transport_protocol_name": "http", "transport_protocol": "1", "repository": "_ORGANIZATION_/_REPOSITORY_", "repository_public": "true" } } },
  { "rule": { "level": 3, "description": "GitHub Git clone.", "id": "91158", "firedtimes": 4, "mail": false, "groups": ["github", "git", "git_git"] }, "data": { "integration": "github", "github": { "@timestamp": "1624448423987.000000", "org": "_ORGANIZATION_", "repo": "_ORGANIZATION_/_REPOSITORY_", "action": "git.clone", "transport_protocol_name": "http", "transport_protocol": "1", "repository": "_ORGANIZATION_/_REPOSITORY_", "repository_public": "true" } } },
  { "rule": { "level": 3, "description": "GitHub Git clone.", "id": "91158", "firedtimes": 5, "mail": false, "groups": ["github", "git", "git_git"] }, "data": { "integration": "github", "github": { "@timestamp": "1624448432101.000000", "org": "_ORGANIZATION_", "repo": "_ORGANIZATION_/_REPOSITORY_", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "action": "git.clone", "transport_protocol_name": "http", "transport_protocol": "1", "repository": "_ORGANIZATION_/_REPOSITORY_", "repository_public": "true" } } },
  { "rule": { "level": 3, "description": "GitHub Git clone.", "id": "91158", "firedtimes": 6, "mail": false, "groups": ["github", "git", "git_git"] }, "data": { "integration": "github", "github": { "@timestamp": "1624448487893.000000", "org": "_ORGANIZATION_", "repo": "_ORGANIZATION_/_REPOSITORY_", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "action": "git.clone", "transport_protocol_name": "http", "transport_protocol": "1", "repository": "_ORGANIZATION_/_REPOSITORY_", "repository_public": "true" } } },
  { "rule": { "level": 3, "description": "GitHub Git clone.", "id": "91158", "firedtimes": 7, "mail": false, "groups": ["github", "git", "git_git"] }, "data": { "integration": "github", "github": { "@timestamp": "1624448736294.000000", "org": "_ORGANIZATION_", "repo": "_ORGANIZATION_/_REPOSITORY_", "actor_location": { "country_code": "_COUNTRY_CODE_" }, "action": "git.clone", "transport_protocol_name": "http", "transport_protocol": "1", "repository": "_ORGANIZATION_/_REPOSITORY_", "repository_public": "true" } } },
];
